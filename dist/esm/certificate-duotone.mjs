export const name="certificate-duotone";
export const id="dl_738afec8eb24434ebde7";
export const url=new URL("../icons/certificate-duotone.svg?v=514b8c29a8bb43fd5837df0dcc3846c00b88bfa091bc67b1bbc797731f29f976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
