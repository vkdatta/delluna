export const name="microphone-stage-duotone";
export const id="dl_fb0ac9e431ab44d39bd2";
export const url=new URL("../icons/microphone-stage-duotone.svg?v=c61a72a7f17778aff873594e3f7ccb5a7f42dc8992f82dfe4183b758ea53e059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
