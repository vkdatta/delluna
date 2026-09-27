export const name="crown-simple";
export const id="dl_f8bf7087f323477b8eb0";
export const url=new URL("../icons/crown-simple.svg?v=20be6ccb7b224d3a39b4a165fc5a33accaddeb0c9d7e0dc0842eb2d53cafbf8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
