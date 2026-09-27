export const name="bookmark-thin";
export const id="dl_30e737dba49c4dff8c49";
export const url=new URL("../icons/bookmark-thin.svg?v=41afba7f885359e4071b789a2315a4ff0b361a2a36db0420be7a57ed775d9d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
