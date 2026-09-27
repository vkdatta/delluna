export const name="chat-centered-text-thin";
export const id="dl_6a0508a058a840aa9425";
export const url=new URL("../icons/chat-centered-text-thin.svg?v=343088fcd4894e6f2adc6f42e7872c0706292014aafd6e21617f3e2975d86150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
