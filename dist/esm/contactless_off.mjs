export const name="contactless_off";
export const id="dl_7de8aa480a43123b552d";
export const url=new URL("../icons/contactless_off.svg?v=bb2a2236fcebf4a8dd63595e927f925f989364045c303559a2810beb2b685724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
