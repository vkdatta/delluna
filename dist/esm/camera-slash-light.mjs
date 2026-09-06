export const name="camera-slash-light";
export const id="dl_9aa98c5aca734b6ba2ed";
export const url=new URL("../icons/camera-slash-light.svg?v=0a731838d821d03b8c66a9cd4098082997b640ed253bcf295bcd9d5cf28587e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
