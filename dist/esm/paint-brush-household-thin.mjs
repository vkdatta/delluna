export const name="paint-brush-household-thin";
export const id="dl_c9974ef652ee47fe95f7";
export const url=new URL("../icons/paint-brush-household-thin.svg?v=dc994653b4e5d288811a9ae54d503b5e14103acca9f72d77eb8082d2fe3242df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
