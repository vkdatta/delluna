export const name="paragraph-thin";
export const id="dl_5fa201f8fed842f3b3ff";
export const url=new URL("../icons/paragraph-thin.svg?v=eb536fea4908c717657f3deac09ca2bbc8c449e12168206519246f4e5da2b3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
