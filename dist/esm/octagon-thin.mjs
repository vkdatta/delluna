export const name="octagon-thin";
export const id="dl_d53f8c51a9c04028af7d";
export const url=new URL("../icons/octagon-thin.svg?v=e4d6188f5fb27c6044d259c351541755d6bed2febb34eef554efe58041c214a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
