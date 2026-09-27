export const name="not-superset-of-thin";
export const id="dl_093e8347151e4203b731";
export const url=new URL("../icons/not-superset-of-thin.svg?v=c45bc2fd890ebff80d6a5a7c4bac7eaabf9d2cb932ea31b51398132ff3ed8f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
