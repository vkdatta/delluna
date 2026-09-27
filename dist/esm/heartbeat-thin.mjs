export const name="heartbeat-thin";
export const id="dl_ae5e619b6b0a4cacb36e";
export const url=new URL("../icons/heartbeat-thin.svg?v=f5098d908021147a365204b93b0ec6eb910739f904d7923685644958e9f8835c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
