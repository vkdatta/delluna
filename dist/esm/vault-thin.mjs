export const name="vault-thin";
export const id="dl_86cf73a22cd14911bcb6";
export const url=new URL("../icons/V/vault-thin.svg?v=b0d57d38043b96882b599b689b5b393e8fb9df0ec7e43a35cebb094b98bb9ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
