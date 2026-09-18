export const name="view_agenda";
export const id="dl_22d7c3ec2b1146d4ad46";
export const url=new URL("../icons/view_agenda.svg?v=ae1e2d0158bc1a84d39b87091d5895e21459aaa22fccb18d8fdd19fe5f684f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
