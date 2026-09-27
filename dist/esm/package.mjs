export const name="package";
export const id="dl_86bb5bf5853144ed8c58";
export const url=new URL("../icons/package.svg?v=e9d9f8a8da39fce8f099bdd4312a0a2aab92e5251f576a21115b14a15dd81649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
