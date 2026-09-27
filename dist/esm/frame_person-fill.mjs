export const name="frame_person-fill";
export const id="dl_7c4266016efc0723561f";
export const url=new URL("../icons/frame_person-fill.svg?v=85aa17ad2248aa4e554c95cfa2bcc8e5fa68c70539d06aec7fb1fd1ca6e28aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
