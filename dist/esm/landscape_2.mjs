export const name="landscape_2";
export const id="dl_88300f4a4fe7f7b06579";
export const url=new URL("../icons/landscape_2.svg?v=220f573e9869c62bd2e107118985a038fa44924009bbdef315fe0c393daa1a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
