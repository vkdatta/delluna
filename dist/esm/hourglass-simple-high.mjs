export const name="hourglass-simple-high";
export const id="dl_0b4c48eeeefd48ccbe7e";
export const url=new URL("../icons/hourglass-simple-high.svg?v=7b6f11c3569fd45961a59ad53acfe71e5f2d49922168330f79d7297c9e6dfae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
