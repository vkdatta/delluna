export const name="webhook";
export const id="dl_c4f44283239a46559fb4";
export const url=new URL("../icons/webhook.svg?v=73bbfedf00dcb83bfa06396825a5c0cce0f0d421e3dc9dee67dff45a9e67a4c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
