export const name="champagne-duotone";
export const id="dl_3e19508a9c2641ad8f4e";
export const url=new URL("../icons/champagne-duotone.svg?v=9b7628a6a272df78935afaf9d757c65e4cb6bd92ebdad6a4080db75e8203f093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
