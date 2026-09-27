export const name="pin_history-fill";
export const id="dl_9fb779b39525dc44e487";
export const url=new URL("../icons/pin_history-fill.svg?v=d5436d6e2d842be7b0c4c4eb47acf326ee041ec7431db4ae91a37a76df43b2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
