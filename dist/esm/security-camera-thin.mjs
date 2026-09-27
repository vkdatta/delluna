export const name="security-camera-thin";
export const id="dl_ac41dec4e8bcf94bef30";
export const url=new URL("../icons/security-camera-thin.svg?v=15776d702e0fc8b26804b3cb5dd36d55108b6c656efdbfce33ce185743e62029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
