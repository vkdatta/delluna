export const name="mask-sad-thin";
export const id="dl_a70a322240ba48c7936b";
export const url=new URL("../icons/mask-sad-thin.svg?v=e2c2fb74d472e11788fde9e6820921fbb5be042215fa8819094b1ab1f58a7027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
