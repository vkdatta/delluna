export const name="contextual_token";
export const id="dl_1dc50eb8070443d9b73e";
export const url=new URL("../icons/contextual_token.svg?v=ec786b511331a37b1aa2ff800658dc726793eec415898d97747e73af60527d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
