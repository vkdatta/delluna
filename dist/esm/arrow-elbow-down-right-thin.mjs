export const name="arrow-elbow-down-right-thin";
export const id="dl_bfbf953780de4a92a3d2";
export const url=new URL("../icons/arrow-elbow-down-right-thin.svg?v=d2fa0d73c5861153e62333c54e6f44908c08866d80110dd0c6e2d83ac11ef724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
