export const name="brackets-square-thin";
export const id="dl_50db609bd3274c46874b";
export const url=new URL("../icons/brackets-square-thin.svg?v=a1f203ebfa6fc761887a4563ccf9530ae4a4b09f5b1a714c41c2adeeabc56da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
