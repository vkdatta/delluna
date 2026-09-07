export const name="clock-clockwise-light";
export const id="dl_580c1c1ad35244b1b1f4";
export const url=new URL("../icons/clock-clockwise-light.svg?v=7395c0d0433705513f9895217eeae61634fb8af6fea6ec626eb877eebcf9a3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
