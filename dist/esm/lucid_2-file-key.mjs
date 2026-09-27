export const name="lucid_2-file-key";
export const id="dl_950f3fe7c3794423891d";
export const url=new URL("../icons/lucid_2-file-key.svg?v=f32f198f0057bd8ee36f168c43437d18d91a2b2393577c72088b9a99197594a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
