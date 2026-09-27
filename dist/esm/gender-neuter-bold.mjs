export const name="gender-neuter-bold";
export const id="dl_4151caa82f1e4647902f";
export const url=new URL("../icons/gender-neuter-bold.svg?v=a33e4daa6d4b0af2bf46e8a1479e55271939dfa71b9e7466d92c58794029e6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
