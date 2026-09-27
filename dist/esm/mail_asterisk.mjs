export const name="mail_asterisk";
export const id="dl_315e0cee62114136d4d2";
export const url=new URL("../icons/mail_asterisk.svg?v=46065f0132721292411bc7029e8ec2519e4ba1df81fd7ca783c6ee7b2607d553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
