export const name="seal-question-light";
export const id="dl_fe307dbffd3349a19a42";
export const url=new URL("../icons/S/seal-question-light.svg?v=dca43aee4672ff77e94fc53744e6ddd49d4b12caaac0b8229fabea9487f6fe77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
