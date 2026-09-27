export const name="warning-octagon-thin";
export const id="dl_7ec19b3251487b50dde8";
export const url=new URL("../icons/warning-octagon-thin.svg?v=7a9605c14f6fca1a49884d22c87207f3e8b6bbdd06f059d669877b66bfe04959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
