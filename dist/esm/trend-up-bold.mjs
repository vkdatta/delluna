export const name="trend-up-bold";
export const id="dl_69f1573d1ce44eccab4c";
export const url=new URL("../icons/T/trend-up-bold.svg?v=eb0256a0f8130f381199b208d7bdc4abb1d82d9ca3cf47c0ec7025321de7ced2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
