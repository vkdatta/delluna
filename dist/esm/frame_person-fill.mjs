export const name="frame_person-fill";
export const id="dl_f71e34813b7f4575907b";
export const url=new URL("../icons/F/frame_person-fill.svg?v=85aa17ad2248aa4e554c95cfa2bcc8e5fa68c70539d06aec7fb1fd1ca6e28aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
