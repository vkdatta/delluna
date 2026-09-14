export const name="all_out";
export const id="dl_fec4d59e0fcc41b0b974";
export const url=new URL("../icons/A/all_out.svg?v=75216a73a4d5846c3135af162fa4a9b8629faf490736c8928df607d8a644ec45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
