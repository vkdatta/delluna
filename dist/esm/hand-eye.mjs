export const name="hand-eye";
export const id="dl_30b16a52e93b4a68a43c";
export const url=new URL("../icons/hand-eye.svg?v=c456b3a316e260121f05cc5bc29973f22cc6ce6f3a92fd80f836b42c30c4d575",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
