export const name="push-pin-thin";
export const id="dl_4f70597dd0334cfe8c60";
export const url=new URL("../icons/push-pin-thin.svg?v=b4b4c8ee9d249894e231d782062e0a8d95b8eb386d1790589a50576f5d6e28b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
