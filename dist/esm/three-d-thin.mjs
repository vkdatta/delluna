export const name="three-d-thin";
export const id="dl_80b8da7f9bd38a4271d7";
export const url=new URL("../icons/three-d-thin.svg?v=98c2929bda0402c695a40092ae49aa1e106f8b4dc66ecca1f7f5a06ef4df92bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
