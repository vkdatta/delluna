export const name="less-than-thin";
export const id="dl_d0fdfc6515434daca882";
export const url=new URL("../icons/less-than-thin.svg?v=36ebcc14148bb9b0bfe87737d55bd985d57e41f60d8eb97b79c9d5a106d13f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
