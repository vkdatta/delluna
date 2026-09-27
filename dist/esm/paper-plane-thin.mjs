export const name="paper-plane-thin";
export const id="dl_b6e85ddd246248bfa70f";
export const url=new URL("../icons/paper-plane-thin.svg?v=7b6aefa8bb6cac2f076b08843e37131e617315058a9f08c32714541c6bd50604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
