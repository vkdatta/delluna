export const name="skip-back-circle-light";
export const id="dl_b0bf627f3eda8b16d6a2";
export const url=new URL("../icons/skip-back-circle-light.svg?v=07cbd54ffcf69b21f600925e4ddbca0977d4007c4a732afb3dfedecb7c73fc4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
