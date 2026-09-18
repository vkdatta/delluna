export const name="hand_gesture_off";
export const id="dl_079ebb86c63947db896e";
export const url=new URL("../icons/H/hand_gesture_off.svg?v=62e94258510a4015ee2d59e479655f70a64c14b0ac802835b4cb56314b35a64e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
