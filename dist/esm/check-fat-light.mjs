export const name="check-fat-light";
export const id="dl_14cd6284660846bab717";
export const url=new URL("../icons/check-fat-light.svg?v=09b4dab3ccb71ca4c0fdf2711cdb3891d487b4aebf52afac87abedd9541fa69c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
