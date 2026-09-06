export const name="hand-swipe-left-duotone";
export const id="dl_22db35def796445ca984";
export const url=new URL("../icons/hand-swipe-left-duotone.svg?v=ec78204e8a2a44f94ec2766670b075efbdc395eb7666afa5023d38dad2955929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
