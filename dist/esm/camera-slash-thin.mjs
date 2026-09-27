export const name="camera-slash-thin";
export const id="dl_46c415d5470b4d0993c2";
export const url=new URL("../icons/camera-slash-thin.svg?v=57e8875e719f93e9e495893fef49612f981872ee9a85849b3b8b3c6a330da297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
