export const name="dropbox-logo-thin";
export const id="dl_2af5e5b6a87f4328b64c";
export const url=new URL("../icons/dropbox-logo-thin.svg?v=89c0b13e296c9d2fcc4c8ac8089500243d3de45f983b9e3b9535310add75b0f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
