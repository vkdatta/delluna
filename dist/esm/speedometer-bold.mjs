export const name="speedometer-bold";
export const id="dl_29e7d621fbcf85bbce74";
export const url=new URL("../icons/speedometer-bold.svg?v=6a1e022a3ee59568dca443259d91083ae9ac80a4e23a7db25a48aab4e2396357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
