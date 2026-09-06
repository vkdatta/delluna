export const name="arrow-square-up-thin";
export const id="dl_d46f36ca8dea4a23a86e";
export const url=new URL("../icons/arrow-square-up-thin.svg?v=514b77a9820bea4d09e57ec5c948ddd30afc833f1cf75c3d7f4c0f22da972207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
