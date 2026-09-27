export const name="smiley-x-eyes-light";
export const id="dl_ff3b421f0da256fc6179";
export const url=new URL("../icons/smiley-x-eyes-light.svg?v=abe61b13f81b007c5ee6c44210d55b859361bdebba60c59f84d2fc185e928289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
