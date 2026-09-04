export const name="beer-stein";
export const id="dl_e31c5fc424c4450bbebb";
export const url=new URL("../../icons/B/beer-stein.svg?v=917abd5aa9922fe46b776086cc7073e475c4747a9bf06af33bd34a15e4feb415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
