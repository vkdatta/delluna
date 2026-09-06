export const name="bicycle-thin";
export const id="dl_3ac5be9d004b4a9ca10a";
export const url=new URL("../icons/bicycle-thin.svg?v=e6631311187f63ff9f899d8acb95457de01079ee994f697a0c8f33bbfa4bbbfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
