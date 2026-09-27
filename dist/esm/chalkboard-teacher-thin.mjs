export const name="chalkboard-teacher-thin";
export const id="dl_98541d0999ee4903bc5c";
export const url=new URL("../icons/chalkboard-teacher-thin.svg?v=576315f2002f15329f8214192e5fa4b08e735e9c960e53595d19d3906afe8b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
