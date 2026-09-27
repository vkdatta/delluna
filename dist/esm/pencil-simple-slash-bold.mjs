export const name="pencil-simple-slash-bold";
export const id="dl_1940dd3a90c94c4d941c";
export const url=new URL("../icons/pencil-simple-slash-bold.svg?v=24ed6a8caf1d343840c24c0d6c82f9ed9b0bb3df58f150e10a73818769683dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
