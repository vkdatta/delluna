export const name="personal_injury";
export const id="dl_ee38646c46c7c70dca8e";
export const url=new URL("../icons/personal_injury.svg?v=5df7661be2208b2e0ca8d4c8c612ba18c0fcf891d4596c850648e767ca89b316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
