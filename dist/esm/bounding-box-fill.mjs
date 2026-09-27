export const name="bounding-box-fill";
export const id="dl_28b87faf186d4812a97b";
export const url=new URL("../icons/bounding-box-fill.svg?v=29a1d4cf3529042106f2605bad4801c69866ce9b8ea72c759796abff57642adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
