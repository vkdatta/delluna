export const name="chat-circle-dots-thin";
export const id="dl_eb69cfe51a2146cf9990";
export const url=new URL("../icons/chat-circle-dots-thin.svg?v=420242d003d531be7e4129437d58e62664d32d78ebfb0c9757267f257ca1e110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
