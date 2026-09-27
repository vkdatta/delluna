export const name="clock-clockwise-light";
export const id="dl_580c1c1ad35244b1b1f4";
export const url=new URL("../icons/clock-clockwise-light.svg?v=6dfe078e19db8c33cb58ffc86a2fc91d206c0f46ffe14bbeabf257c2a1079608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
