export const name="sliders-horizontal-bold";
export const id="dl_46890f4b85d5f243d42a";
export const url=new URL("../icons/sliders-horizontal-bold.svg?v=272676bebcd15ee564b0051ec4ba460a7d802d4958a0c00574feb119d859f67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
